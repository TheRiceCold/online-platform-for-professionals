import Axios from "@/axios";

const handler = async(req, res) => {
  const {data} = await Axios("cities");

  const cities = data.map(city => {
    return {
      label: city.name,
      value: city.name
    }
  }) ;

  res.status(200).json(cities);
}

export default handler;
