class Solution {
    public boolean alNum(char ch) {
        return Character.toString(ch).matches("[a-zA-Z0-9]");
        // return Character.isLetterOrDigit(ch);
    }

    public boolean isPalindrome(String s) {
        int i = 0, j = s.length() - 1;

        while (i < j) {
            if (!alNum(s.charAt(i)))
                i++;
            else if (!alNum(s.charAt(j)))
                j--;

            else if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j)))
                return false;
            else {
                i++;
                j--;
            }
        }
        return true;
    }
}