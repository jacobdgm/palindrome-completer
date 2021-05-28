import json

with open('filt_dictionary.json') as wd:
    words = json.load(wd)
        
def segment_string(rem_string, prev_list=None):
    prev_list = prev_list or []
    
    # base case: successfully reached the end of the string
    if rem_string == "":
        return True, prev_list

    # check for valid words at the beginning of the string
    for i in range(1, len(rem_string) + 1):
        if rem_string[0:i] in words:
            new_list = prev_list + [rem_string[0:i]]
            segmentable, solution_list = segment_string(rem_string[i:], new_list)
            if segmentable:
                return True, solution_list
            else:
                continue
                
    # base case: rem_string cannot be segmented
    return False, []    
