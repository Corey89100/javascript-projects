// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){


  // Write your unit tests here!
  test("organazation should be nonprofit", function() {
    let results = launchcode.organization;
    expect(results).toBe('nonprofit');
  });

  test("executive director needs to be jeff", function() {
    let results = launchcode.executiveDirector;
    expect(results).toBe('Jeff');
  });

  test("percentagecoolemployees needs to be 100", function() {
    let results = launchcode.percentageCoolEmployees;
    expect(results).toBe(100);
  });

  test("programs offered need to be Web Development, Data Analysis, Liftoff", function() {

    expect( launchcode.programsOffered[0]).toBe("Web Development");
    expect( launchcode.programsOffered[1]).toBe("Data Analysis");
    expect( launchcode.programsOffered[2]).toBe("Liftoff");
    expect( launchcode.programsOffered.length).toBe(3);
  });
});