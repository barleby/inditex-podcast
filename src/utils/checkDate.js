export default function checkDate() {

    console.log("existe en localStorage? ", localStorage.getItem('timeOfUpdate') ? true : false);
    const currentDateInMiliseconds = Date.now();

    const lastTimeUpdated = localStorage.getItem('timeOfUpdate');
    if (!lastTimeUpdated) {
        localStorage.setItem('timeOfUpdate', currentDateInMiliseconds);
        return true;
    }

    const oneDayInMilisencods = 1000 * 60 * 60 * 24;

    const needToUpdate = (currentDateInMiliseconds - lastTimeUpdated) > oneDayInMilisencods;

    console.log('needUpdate:', needToUpdate)

    needToUpdate && localStorage.setItem('timeOfUpdate', currentDateInMiliseconds);

    return needToUpdate;
};