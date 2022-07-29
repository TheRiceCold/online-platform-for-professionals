import { Textarea } from "@chakra-ui/react";

const TextArea = ({ input, register }) => (
  <Textarea
    id={input.id} 
    {...register(input.id)}
    placeholder={input.label}
  />
);

export default TextArea;
