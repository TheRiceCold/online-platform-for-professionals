import Axios from "@/axios";

const handler = async(req, res) => {
  const {data} = await Axios("regions");

  const regions = data.map(region => {
    return {
      label: region.name,
      value: region.name
    }
  });

  res.status(200).json(regions);
};

export default handler;
