import Axios from "~/lib/adapters/axios";

const handler = async(req, res) => {
  const { data } = await Axios("fields");

  const professionalFields = data.map(field => {
    return {
      label: field.name,
      value: field.name
    }
  });

  res.status(200).json(professionalFields);
}

export default handler;
