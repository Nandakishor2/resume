def createfreq(arr):
    freq = []
    num = max(arr)
    for i in range(num+1):
        freq.append(0)
    for ar in arr:
        try:
            freq[ar] = freq[ar]+1
        except:
            freq[ar] = freq[ar]
    return freq
def makelist(arr):
    result = []
    frequency = createfreq(arr)
    for i in range(len(frequency)):
        j = 0
        print("freq",frequency[i])
        while (j<frequency[i]):
            result.append(i)
            j+=1
    return result        





if __name__ == '__main__':
   

    result = makelist([1,1,3,2,1])

    print(result)
