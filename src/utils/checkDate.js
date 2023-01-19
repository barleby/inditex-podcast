export default function checkDate() {

    console.log("existe en localStorage? ", localStorage.getItem('timeOfUpdate') ? true : false)
    const currentDateInMiliseconds = Date.now()
    const getLastTimeUpdated = () => {
        const lastDay = localStorage.getItem('timeOfUpdate')
        if (!lastDay) {
            localStorage.setItem('timeOfUpdate', currentDateInMiliseconds)
            return currentDateInMiliseconds
        }

        return lastDay;
    }

    const lastTimeUpdated = getLastTimeUpdated();
    const oneDayInMilisencods = 1000

    const needToUpdate = true;  // temporarily set to true formula:(currentDateInMiliseconds - lastTimeUpdated) > oneDayInMilisencods;

    console.log('needUpdate:', needToUpdate)

    needToUpdate && localStorage.setItem('timeOfUpdate', currentDateInMiliseconds);

    return needToUpdate;
};