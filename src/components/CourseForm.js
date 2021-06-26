import TextInput from "./TextInput";

function CourseForm({ course, onChange }) {
  return (
    <form>
      <TextInput name="title" label="Title" onChange={onChange} value={course.title} />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={onChange}
            value={course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Jamshid</option>
            <option value="2">Jafar</option>
          </select>
        </div>
      </div>

      <TextInput name="category" label="Category" value={course.category} onChange={onChange} />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
