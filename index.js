
function findMatching(drivers,query){
    const lowercaseQuery = query.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
    const lowercaseDriverName = driver.toLowerCase();
        return lowercaseDriverName.includes(lowercaseQuery);
    });
    return matchingDrivers;
}
const drivers = ['Bobby','Sammy','Sally','Annette','Sarah','bobby'];
const query = "b";
const matchingDrivers = findMatching(drivers, query);
console.log(matchingDrivers);
function fuzzyMatch(drivers, query) {
    const lowercaseQuery = query.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
      const lowercaseDriverName = driver.toLowerCase();

      return lowercaseDriverName.startsWith(lowercaseQuery);
    });
    return matchingDrivers;
  }
  function matchName(driverObjects, query) {
    const matchingDrivers = driverObjects.filter(driver => {
      const lowercaseDriverName = driver.name.toLowerCase();
      const lowercaseQuery = query.toLowerCase();
      return lowercaseDriverName === lowercaseQuery;
    });
  
    return matchingDrivers;
  }
  
 
  