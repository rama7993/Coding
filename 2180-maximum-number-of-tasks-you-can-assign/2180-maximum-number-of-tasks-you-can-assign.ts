function maxTaskAssign(tasks: number[], workers: number[], pills: number, strength: number): number {
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => b - a);

    let left = 0, right = Math.min(workers.length, tasks.length);

    while (left < right) {
        const mid = right - Math.floor((right - left) / 2);
        if (canAssignTasks(mid)) left = mid;
        else right = mid - 1;
    }

    return left;

    function canAssignTasks(k: number): boolean {
        const selectedWorkers = workers.slice(0, k).reverse();
        const selectedTasks = tasks.slice(0, k).reverse();
        let remainingPills = pills;
        const bisectHelper = createBisectHelper();

        for (let task of selectedTasks) {
            let index = bisectHelper.bisectLeft(selectedWorkers, task);
            if (index < selectedWorkers.length) selectedWorkers.pop();
            else if (remainingPills > 0) {
                index = bisectHelper.bisectLeft(selectedWorkers, task - strength);
                if (index < selectedWorkers.length) {
                    selectedWorkers.splice(index, 1);
                    remainingPills -= 1;
                }
            } else return false;
        }

        return selectedWorkers.length === 0;
    }
};

function createBisectHelper() {
    return { bisectLeft };

    function bisectLeft(arr: number[], x: number, lo: number = 0, hi: number | null = null): number {
        if (hi == null) hi = arr.length;
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            arr[mid] < x ? (lo = mid + 1) : (hi = mid);
        }
        return lo;
    }
}