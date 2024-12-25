def get_completed(time_worked: str, total_time: str) -> str:
    def miliseconds(h: str, m: str, s: str) -> int:
        return (+h * 3600 + +m * 60 + +s) * 1000

    worked = time_worked.split(":")
    total = total_time.split(":")
    worked_miliseconds = miliseconds(worked[0], worked[1], worked[2])
    total_miliseconds = miliseconds(total[0], total[1], total[2])
    return f"{round((worked_miliseconds / total_miliseconds) * 100)}%"
