import moment from "moment";
import { Task } from "./types";

export const formatTime = (createdAt: string) => {
  const now = moment();
  const created = moment(createdAt);

  // if the task was created today
  if (created.isSame(now, "day")) {
    return "Hoy";
  }

  // if the task was created yesterday
  if (created.isSame(now.subtract(1, "days"), "day")) {
    return "Ayer";
  }

  // check if created with the last 7 days
  if (created.isAfter(moment().subtract(6, "days"))) {
    return created.fromNow();
  }

  // if item was created within the last 4 weeks (up to 1 month ago)
  if (created.isAfter(moment().subtract(3, "weeks"), "week")) {
    return created.fromNow();
  }

  return created.format("DD/MM/YYYY");
};

export const filteredTasks = (tasks: Task[], priority: string) => {
  const filteredTasks = () => {
    switch (priority) {
      case "baja":
        return tasks.filter((task) => task.priority === "baja");
      case "media":
        return tasks.filter((task) => task.priority === "media");
      case "alta":
        return tasks.filter((task) => task.priority === "alta");
      default:
        return tasks;
    }
  };

  return filteredTasks();
};

export const overdueTasks = (tasks: Task[]) => {
  const todayDate = moment();

  // filter tasks that are not completed and the due date is before today
  return tasks.filter((task) => {
    return !task.completed && moment(task.dueDate).isBefore(todayDate);
  });
};
