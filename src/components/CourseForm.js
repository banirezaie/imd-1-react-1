import TextInput from "./TextInput";

function CourseForm({ course, onChange, onSubmit, errors }) {
  return (
    <form onSubmit={onSubmit}>
      <TextInput name="title" label="Title" onChange={onChange} value={course.title} errors={errors.title} />

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
        {errors.authorId && <div className="alert alert-danger">Author is required</div>}
      </div>

      <TextInput name="category" label="Category" value={course.category} onChange={onChange} errors={errors.category} />


      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
