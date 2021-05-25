def is_palindrome(s):
    """
    Return s is a palindrome.
    """
    return s == s[::-1]
    
def shortest_palindromic_completion(s):
    tail_i = 0
    for i, _ in enumerate(s):
        sl = s[i:]
        if is_palindrome(sl):
            tail_i = i
            break
    completion = s + s[:tail_i][::-1]
    return completion