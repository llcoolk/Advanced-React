import UpdateItem from "../components/UpdateItem";

const UpdateItemPage = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

export default UpdateItemPage;
