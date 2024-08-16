
const getStoredDonnerApplication = () => {
    const storedDonnerApplication = localStorage.getItem('donner-application');
    if (storedDonnerApplication) {
        return JSON.parse(storedDonnerApplication)
    }

    return []
}

const saveDonnerApplication = id => {
    const storedDonnerApplications = getStoredDonnerApplication();
    const exists = storedDonnerApplications.find(donnerId => donnerId === id);
    if (!exists) {
        storedDonnerApplications.push(id);
        localStorage.setItem('donner-application', JSON.stringify(storedDonnerApplications))
    }


}

export { getStoredDonnerApplication, saveDonnerApplication }