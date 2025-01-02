class Solution {
public:
    int maxScore(string s) {
        int max_score = 0, curr_score = 0, total_ones = 0, left_zeros = 0,
            left_ones = 0;
        for (char& c : s) {
            if (c == '1')
                total_ones++;
        }

        for (int i = 0; i < s.length() - 1; i++) {
            if (s[i] == '0')
                left_zeros++;
            else
                left_ones++;
            curr_score = left_zeros + total_ones - left_ones;
            max_score = max(max_score, curr_score);
        }

        return max_score;
    }
};