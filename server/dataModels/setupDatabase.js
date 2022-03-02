const { faker } = require("@faker-js/faker");
const Chance = require("chance");
const chance = new Chance();
const path = require("path");
const dayjs = require("dayjs");

const sequelize = require("./db");
const User = require("./User");
const Project = require("./Project");
const Accounts = require("./Accounts");

async function setupDatabase() {
  console.log("in function async setup");
  await User.sync({ force: true });
  await Project.sync({ force: true });
  await Accounts.sync({ force: true });
  // console.log("User and Project synced")
  await initializeData();
  // console.log("Database has been initialized ")
}

async function initializeData() {
  let newUserValue = {
    firstName: "Anand",
    lastName: "Gupta",
    email: "Anand.Gupta@gmail.com",
    employeeId: `ET44508`,
    token: `${chance.string({ length: 25, casing: "lower" })}`,
    status: "active",
  };
  console.log(`new user value is `);
  console.log(JSON.stringify(newUserValue));
  let newUser = User.build(newUserValue);
  await newUser.save();
  console.log("first user saved");

  // TODO : ensure that names , email and employeeId are unique , though chances are the random values won't conflict .
  // TODO : chance library may not be needed .
  const usedNames = [];
  let statusOptions = ["active", "inactive", "deleted"];
  for (let i = 0; i < 25; i++) {
    console.log("entering for loop for user creation");
    let statusChance = chance.integer({ min: 0, max: 2 });
    let userValues = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      employeeId: `E${chance.letter({ casing: "upper" })}${chance.natural({
        min: 10000,
        max: 99999,
      })}`,
      token: `${chance.string({ length: 25, casing: "lower" })}`,
      status: statusOptions[statusChance],
    };
    console.log("creating random user Value :");
    console.log(JSON.stringify(userValues));
    let user = User.build(userValues);
    await user.save();
    console.log("user saved;");
  }

  let userIds = await User.findAll({
    attributes: ["id"],
  });

  // Initializing projects
  let startingDateRandomDayDifference = chance.integer({ min: 0, max: 25 });
  let plannedStartDate = dayjs().subtract(
    chance.integer({ min: 40, max: 85 }),
    "day"
  );
  let actualStartDate = plannedStartDate.add(
    startingDateRandomDayDifference,
    "day"
  );
  let plannedEndDate = plannedStartDate.add(
    chance.integer({ min: 150, max: 300 }),
    "day"
  );
  let actualEndDate = actualStartDate.add(
    chance.integer({ min: 100, max: 400 }, "day")
  );
  for (let i = 0; i < 40; i++) {
    //      console.log('entering loop')
    let statusChance = chance.integer({ min: 0, max: 2 });
    let randomManagerIdArrayPosition = chance.integer({
      min: 0,
      max: userIds.length - 1,
    });

    let projectDetails = {
      shortName: chance.company(),
      longName: `${faker.commerce.productAdjective()}-${faker.commerce.product()}`,
      projectManagerId: userIds[randomManagerIdArrayPosition]["id"],
      plannedStartDate: plannedStartDate.toDate(),

      actualStartDate: actualStartDate.toDate(),
      plannedEndDate: plannedEndDate.toDate(),
      actualEndDate: actualEndDate.toDate(),

      projectType: [
        "GreenField",
        "Refactoring",
        "Integration",
        "Maintainance",
        "General",
      ][chance.integer({ min: 0, max: 4 })],
      status: statusOptions[statusChance],
    };

    let project = Project.build(projectDetails);
    await project.save();
  }
  //accounts

  let newAccount = {
    account_id: "E2681",
    account_name: "TIDC",
    country: "INDIA",
    account_manager: "Subhash",
  };
  console.log("new account value is");
  console.log(JSON.stringify(newAccount));
  let newAccountUser = Accounts.build(newAccount);
  await newAccountUser.save();
  console.log("first Account saved");

  // for (let i = 0; i < 30; i++) {
  //   let newAccountValues = {
  //     account_id: chance.integer({ min: 1, max: 100 }),
  //     account_name: chance.name(),
  //     country: chance.country(),
  //     account_manager: faker.name.firstName(),
  //   };
  //   console.log("new accounts values is");
  //   console.log(JSON.stringify(newAccountValues));
  //   let accounts = Accounts.build(newAccountValues);
  //   await accounts.save();
  //   console.log("all accounts saved")
  // }
}
//

module.exports.setupDatabase = setupDatabase;
