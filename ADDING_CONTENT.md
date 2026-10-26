# How to add new PDF content to the app (Supabase + Drive)

You can do all of this without Claude. The only tool you need is the Supabase **SQL Editor**, plus any AI chat to turn PDF content into SQL (a ready-made prompt is in section 5).

---

## 1. How the data is organised

```
topic    "Spring Boot"                     <- the card on the home page
 └─ group  "Dependency Injection"          <- one item in the LEFT sidebar, owns ONE PDF
     └─ section  "Setter Injection"        <- one page shown on the right
         └─ blocks: text, code, output...  <- the actual content of that page
```

- A **topic** is a card on the home page. Spring Boot is one topic. Java, SQL, etc. would be other topics.
- A **group** is a sidebar entry. It has an optional `pdf_url`, which is shown below the content of every section in that group. One PDF per group.
- A **section** is one page. Its content is a list of **blocks**.
- A group with only one section shows as a plain sidebar item. A group with several sections opens like a folder.

Tables: `topics`, `groups`, `sections`. Anyone can **read** them (the website needs that). Nobody can **write** from the website. You add content only from the Supabase dashboard, so it is safe.

---

## 2. Putting the PDF on Drive

1. Upload the PDF to Google Drive.
2. Right click, **Share**, then General access: **Anyone with the link**, role **Viewer**.
3. Copy the link. It looks like:
   `https://drive.google.com/file/d/1RDmKlKT1XcfBov3aWY3dVLipEJAJWlSC/view?usp=sharing`
4. Take the part between `/d/` and `/view`. That is the **file id**: `1RDmKlKT1XcfBov3aWY3dVLipEJAJWlSC`
5. Build the embed link by putting the file id into this:
   `https://drive.google.com/file/d/FILE_ID/preview`
   Use this `/preview` link in the database, **not** the `/view` link. `/view` will not embed.

If the PDF shows a Drive error inside the app, the sharing is not set to "Anyone with the link".

---

## 3. The block types (what goes inside `blocks`)

`blocks` is a JSON list. Each block is an object with a `type`.

| type | Use for | Fields |
|---|---|---|
| `text` | Explanations, bullet points, headings | `text` |
| `code` | Java or other code | `code`, `lang` (optional, default `java`), `label` (optional title), `tone` (optional: `good` green border, `bad` red border) |
| `output` | Console output, logs, error boxes | `text`, `label` (optional title) |
| `html` | Old rich content with tables and boxes. Avoid for new content. | `html` |

Rules for the `text` block:
- A blank line starts a new paragraph.
- A line starting with `- ` becomes a bullet.
- A line starting with `-> ` stays a normal line.
- `**bold**` and `` `code` `` work inline.

Example of one section's blocks:

```json
[
  {"type": "text", "text": "Setter Injection\n\n- Dependency is set into the fields using the setter method.\n- We have to annotate the method using @Autowired"},
  {"type": "code", "lang": "java", "code": "@Component\npublic class User {\n    public Order order;\n\n    @Autowired\n    public void setOrderDependency(Order order){\n        this.order = order;\n    }\n}"},
  {"type": "output", "label": "Output", "text": "order initialized\nUser initialized"}
]
```

JSON rules that people get wrong:
- New lines inside a string are written as `\n`, never a real line break.
- A double quote inside a string is written as `\"`.
- A backslash is written as `\\`. For example `curl ... \` at the end of a line becomes `\\`.
- The last item in a list has no trailing comma.

---

## 4. The SQL to add things

Open Supabase, then **SQL Editor**, then **New query**, paste, then **Run**.

### 4a. Add a new group with its sections (most common case)

This adds a group called "Spring Data JPA" to the existing Spring Boot topic.

First find the next free group position:

```sql
select max(position) from groups
where topic_id = (select id from topics where slug = 'spring-boot');
```

If it returns 10, your new group is position 11. Then:

```sql
-- 1) the group (sidebar item + its PDF)
insert into groups (topic_id, position, title, pdf_url)
select id, 11, 'Spring Data JPA',
       'https://drive.google.com/file/d/FILE_ID/preview'
from topics where slug = 'spring-boot';

-- 2) its sections. Repeat this block for each section, position 1, 2, 3...
insert into sections (group_id, position, title, blocks)
select g.id, 1, 'What is JPA?',
$j$[
  {"type": "text", "text": "JPA is ..."},
  {"type": "code", "code": "@Entity\npublic class User { }"}
]$j$::jsonb
from groups g join topics t on t.id = g.topic_id
where t.slug = 'spring-boot' and g.position = 11;
```

Things to know:
- The `$j$ ... $j$` wrapper means you do not have to escape single quotes in the JSON. Keep it exactly as shown.
- Section `position` starts at 1 inside each group. The sidebar and Prev/Next follow position order.
- If the PDF does not exist, write `null` instead of the quoted link: `select id, 11, 'Spring Data JPA', null`.
- The `where ... g.position = 11` must match the position you used in step 1.

### 4b. Add a whole new topic card (for example Java or SQL)

1. Add the topic row:
   ```sql
   insert into topics (slug, title, category) values ('java-core', 'Java Core', 'Backend');
   ```
2. Add groups and sections exactly as in 4a, but with `slug = 'java-core'`. Group positions start at 1.
3. Add the card to the website. Open `script.js`, find the `TOPICS` list near the top, and add a line like this. Change `id`, `name`, `category` and `remoteSlug`:
   ```js
   {id:'java-core',name:'Java Core',icon:'',color:'#f59e0b',gradient:'',category:'backend',hasContent:true,isNew:true,remoteSlug:'java-core'},
   ```
   `remoteSlug` must be exactly the `slug` from step 1. `category` must be a key that already exists in `CATEGORIES` at the top of `script.js` (backend, frameworks, database, dsa, and so on).
4. Add an icon for the card in `TOPIC_ICONS` in `script.js` (copy another entry and rename the key to your `id`). Without it the card shows no icon.
5. Commit and push.

For a new group inside an existing topic (4a), you do not touch the code. Refresh the page and it appears.

### 4c. Change something that already exists

Rename a group:
```sql
update groups set title = 'New name'
where title = 'Dependency Injection';
```

Change or add a PDF:
```sql
update groups set pdf_url = 'https://drive.google.com/file/d/FILE_ID/preview'
where title = 'Bean Scopes';
```

Replace the content of one section (re-run with new blocks):
```sql
update sections set blocks = $j$[ {"type":"text","text":"new text"} ]$j$::jsonb
where title = 'Singleton'
  and group_id = (select id from groups where title = 'Bean Scopes');
```

Rename a section:
```sql
update sections set title = 'New title'
where title = 'Old title'
  and group_id = (select id from groups where title = 'Bean Scopes');
```

Delete a section, or a whole group (this also deletes all of its sections):
```sql
delete from sections where title = 'Singleton'
  and group_id = (select id from groups where title = 'Bean Scopes');

delete from groups where title = 'Bean Scopes';
```

Change the order: change `position`. Positions must be unique inside the topic (groups) or inside the group (sections). To swap two groups, first move one to a temporary number such as 999, move the other, then move the first.

### 4e. Give every group of a whole topic the same PDF

For topics built from one PDF (SQL, Docker, JDBC, OS, Networks, Git) every group shows the same PDF. Upload the file to Drive, copy the file id, then run:

```sql
update groups set pdf_url = 'https://drive.google.com/file/d/FILE_ID/preview'
where topic_id = (select id from topics where slug = 'docker');
```

Change `'docker'` to the topic's slug (`mysql`, `jdbc`, `operating-systems`, `computer-networks`, `git`, `spring-boot`). A ready file with all of them is in `Downloads/Interview/supabase-seeds/set-pdf-links.sql`.

### 4d. Look at what is there

```sql
select g.position as grp, g.title as group_title, s.position as sec, s.title as section_title
from groups g left join sections s on s.group_id = g.id
order by g.position, s.position;
```

---

## 5. Prompt to give any AI (PDF to ready SQL)

The PDFs are images, so the AI must be able to **see** them. Use an AI that accepts image or PDF upload, or take screenshots of each page and attach them.

Copy this prompt, fill in the three values in `[ ]`, and attach the PDF or screenshots:

````text
I am attaching pages of my study notes (PDF or screenshots). Convert them into
Supabase SQL for my interview prep app.

RULES
- Use ONLY what is in the notes. Do not add your own explanations, definitions
  or examples. Do not fix or reword anything. Keep typos as written.
- Copy every code sample and every console output / error box exactly.
  Keep log lines exactly as shown. If a log is cut off in the picture, copy only
  what is visible.
- If the notes mark a code sample as wrong or correct (red cross, green tick, red
  or green text), put that in the block label and set "tone": "bad" or "good".
- Split the notes into sections: one section per heading or per topic in the
  notes, in the same order as the notes.

OUTPUT
Give me ONE SQL script that I can paste into the Supabase SQL Editor. It must:
1. Insert one row into "groups" for the topic topic_slug = '[spring-boot]',
   position = [11], title = '[Spring Data JPA]',
   pdf_url = '[https://drive.google.com/file/d/FILE_ID/preview or null]'.
2. Insert one row into "sections" for each section, with position 1, 2, 3...,
   a title, and a "blocks" JSON list.

BLOCK FORMAT (JSON list)
- {"type":"text","text":"..."}                      explanations, bullets
- {"type":"code","lang":"java","code":"...","label":"optional","tone":"good|bad optional"}
- {"type":"output","text":"...","label":"optional"}   console output / logs / error box
In "text": blank line = new paragraph, "- " at line start = bullet.
In JSON strings: new lines are \n, quotes are \", backslashes are \\.

SQL FORMAT (copy exactly, only change the values)
insert into groups (topic_id, position, title, pdf_url)
select id, 11, 'Spring Data JPA', 'https://drive.google.com/file/d/FILE_ID/preview'
from topics where slug = 'spring-boot';

insert into sections (group_id, position, title, blocks)
select g.id, 1, 'Section title',
$j$[ ...blocks json... ]$j$::jsonb
from groups g join topics t on t.id = g.topic_id
where t.slug = 'spring-boot' and g.position = 11;

Before you answer, check that every JSON list is valid and that every $j$ opens and closes.
Do not add any commentary inside the SQL.
````

Tip: if the notes are long, send 3 to 4 pages at a time and ask for the sections one batch at a time. Run each batch, then continue with the next section positions.

---

## 6. Check your work

1. Run the check query from 4d. You should see your new group and every section in order.
2. Refresh the app (hard refresh: Cmd+Shift+R). Open the topic, then the new group in the sidebar.
3. Go through every section and compare it with the PDF. The PDF is also shown at the bottom of the page, so you can compare on the same screen.

---

## 7. If something goes wrong

| What you see | Cause and fix |
|---|---|
| `invalid input syntax for type json` | The JSON has a mistake: a missing comma, a real line break inside a string, an unescaped `"`. Paste the JSON into any JSON validator, fix it, and run again. |
| `duplicate key value violates unique constraint` | That `position` is already used. Use `select max(position)` (4a) to find a free one, or delete the old row first. |
| `null value in column "topic_id"` or `"group_id"` | The `where` did not find the parent: wrong slug, or the group `position` does not match. Check with 4d. |
| `syntax error at or near "$"` | A `$j$` is missing or misspelled. Every opening `$j$` needs a closing `$j$::jsonb`. |
| Group missing in the sidebar after refresh | The group was not inserted. Run 4d. Also hard refresh, because the browser keeps the page in memory for a topic until you reload. |
| PDF area blank or Drive error | Sharing is not "Anyone with the link", or you used the `/view` link instead of `/preview`. |
| Card says "Could not load this topic" | The topic row is missing, or `remoteSlug` in `script.js` does not match the `slug` in the `topics` table. |
| "Topic not found in Supabase" | Same as above: slug mismatch. |

---

## 8. Safety rules

- Only the **publishable (anon) key** is in the website code. Never put the `service_role` / secret key in any file in this repo.
- Do your edits in the Supabase dashboard (SQL Editor or Table Editor). Do not try to write from the website.
- Before a big change, back up what exists: Supabase dashboard, **Table Editor**, pick a table, **Export to CSV**.
