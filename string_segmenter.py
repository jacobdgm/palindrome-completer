import json

# words = {"an": 1, "apple": 1}

with open('filt_dictionary.json') as wd:
    words = json.load(wd)
    
def segment_string(rem_string, prev_list = None):
    if prev_list is None:
        prev_list = []
        
    l = len(rem_string)
    if rem_string == "":
        return True, prev_list
    for i in range(l + 1):
        # print("i =", i)
        # print(rem_string[0:i], print(rem_string[0:i] in all_words))
        if rem_string[0:i] in words:
            new_list = prev_list + [rem_string[0:i]]
            segmentable, solution_list = segment_string(rem_string[i:], new_list)
            if segmentable:
                return True, new_list
            else:
                continue
    return False, []
            
            