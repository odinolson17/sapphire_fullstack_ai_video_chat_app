import { randomID } from "../../../../../../functions/randomID";
import { supabase } from "../../../../../../bucket/imageBucket";

export const sendPicture = async (image : any, email: string) => {
  const imageID: string = randomID();
  await supabase.storage.from("images").upload(imageID, image);
  const imageFromBucket = supabase.storage.from("images").getPublicUrl(imageID);
  const url = imageFromBucket.data.publicUrl;

  await fetch("api/userRouter/addProfilePicture", {
    method: "PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: url,
      email: email
    })
  });
  return url;
};