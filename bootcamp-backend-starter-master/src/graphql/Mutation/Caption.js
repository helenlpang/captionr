const Caption = require("../../models/Caption");
const Images = require("../../models/Image");

const submit = async (obj, { input }, { user }) => {
  console.log(user.id);
  console.log("INPUT", input);
  const newCaption = await Caption.query().insert({
    ...input,
    user_id: user.id
  });
  return newCaption;
};

const vote = async (obj, { caption_id }) => {
  const addVote = await Caption.query()
    .findById(caption_id)
    .increment("upvotes", 1);
  const captionn = await Caption.query().findById(caption_id);
  const addImageVote = await Images.query()
    .findById(captionn.image_id)
    .increment("total_upvotes", 1);
  return addVote;
};
const resolver = {
  Mutation: {
    submit,
    vote
  }
};

module.exports = resolver;
