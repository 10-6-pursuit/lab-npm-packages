const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

const numberOfKeys = (obj) => _.keys(obj).length;

const sumNumbers = (array) => _.sum(_.compact(array));

const newMemberArrayToObject = (member) => _.fromPairs(member);

const groupClassByInstructor = (collection) =>
  _.groupBy(collection, "instructor");

const omitAgeFromMembers = (collection) =>
  _.map(collection, (obj) => _.omit(obj, "age"));

function countClassesByInstructor(collection, instructorName) {
  const result = _.filter(collection, { instructor: instructorName });
  return result.length ? result.length : "There is no instructor by that name.";
}

const removeInactiveMembers = (collection) =>
  _.filter(collection, { currentMember: true });

const getUniqueClasses = (collection) =>
  _.map(_.uniqBy(collection, "title"), (classObj) =>
    _.pick(classObj, ["title", "priceInCents"])
  );

const orderClassesByTitleAndLevel = (collection) =>
  _.orderBy(collection, ["title", "level"], ["asc", "desc"]).map(
    ({ title, instructor, level }) => ({ title, instructor, level })
  );

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};
