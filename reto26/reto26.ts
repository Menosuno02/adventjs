function getCompleted(timeWorked: string, totalTime: string): string {
  const miliseconds = (h: string, m: string, s: string) =>
    (+h * 3600 + +m * 60 + +s) * 1000;
  const worked = timeWorked.split(":");
  const total = totalTime.split(":");
  const workedMiliseconds = miliseconds(worked[0], worked[1], worked[2]);
  const totalMiliseconds = miliseconds(total[0], total[1], total[2]);
  return `${Math.round((workedMiliseconds / totalMiliseconds) * 100)}%`;
}
