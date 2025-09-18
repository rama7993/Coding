class TaskManager {
    private mp = new Map<number, [number, number]>();// taskId -> [userId, priority]
    private pq = new MaxPriorityQueue<{ taskId: number; priority: number }>({
        compare: (a, b) => a.priority - b.priority || a.taskId - b.taskId
    });

    constructor(tasks: number[][]) {
        for (const [userId, taskId, priority] of tasks) {
            this.mp.set(taskId, [userId, priority]);
            this.pq.enqueue({ taskId, priority });
        }
    }

    add(userId: number, taskId: number, priority: number): void {
        this.mp.set(taskId, [userId, priority]);
        this.pq.enqueue({ taskId, priority });
    }

    edit(taskId: number, newPriority: number): void {
        const [uId, pId] = this.mp.get(taskId)!;
        this.mp.set(taskId, [uId, newPriority]);
        this.pq.enqueue({ taskId, priority: newPriority });
    }

    rmv(taskId: number): void {
        this.mp.delete(taskId);
    }

    execTop(): number {
        while (!this.pq.isEmpty()) {
            const { taskId, priority } = this.pq.front();
            const record = this.mp.get(taskId);
            // case 1: task was removed
            if (!record) {
                this.pq.dequeue();
                continue;
            }
            const [uID, pID] = record;
            // case 2: task still exists, but priority changed
            if (pID !== priority) {
                this.pq.dequeue();
                continue;
            }
            // case 3: task exists and priority matches
            this.pq.dequeue();
            this.mp.delete(taskId);
            return uID;
        }

        return -1;
    }
}

/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */