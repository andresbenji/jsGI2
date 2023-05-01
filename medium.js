const getMonth = (num) => {
  //conditional that doesn't accept a number that is less than 1 or greater than
  if (num < 1 || num > 12) {
    console.log("Error");
  } else {
    //array with month names
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    //month variable equals to monthNames[] with its index equal to num - 1
    const month = monthNames[num - 1];

    console.log(`${month} is number ${num} `);
  }
};

getMonth(7); //output: july is number 7
