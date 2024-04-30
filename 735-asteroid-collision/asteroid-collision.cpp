class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        stack<int> st;

        for (int i = 0; i < asteroids.size(); i++) {
            int curr = asteroids[i];
            bool collided = false;

            while (!st.empty() && st.top() > 0 && curr < 0) {
                if (abs(curr) > st.top()) {
                    st.pop();
                } else if (abs(curr) == st.top()) {
                    st.pop();
                    collided = true;
                    break;
                } else {
                    collided = true;
                    break;
                }
            }

            if (!collided) {
                st.push(curr);
            }
        }

        vector<int> result(st.size());
        for (int i = st.size() - 1; i >= 0; i--) {
            result[i] = st.top();
            st.pop();
        }

        return result;
    }
};