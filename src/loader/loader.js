import { getShoppingCart } from "../../../../ema-john/public/utilities/fakedb";

const savedJobs = async () => {
  const loadJobs = await fetch("jobs.json");
  const loadedJobs = await loadJobs.json();

  const appliedList = getShoppingCart();

  const savedJob = [];

  for (const id in appliedList) {
    const appliedJob = loadedJobs.find((job) => job.id === id);
    if (appliedList) {
      savedJob.push(appliedJob);
    }
  }
  return savedJob;
};

export default savedJobs;
