// 插入排序：工作原理是构建有序序列，对于未排序数据，在已排序序列中从后往前扫描，找到相应位置并插入。
function insertSort(arr){
    let len = arr.length;
    let preIndex,current;
    for(var i = 1; i < len; i++){
        preIndex = i - 1;
        current = arr[i];
        while(preIndex>=0 && current > arr[preIndex]){
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    console.log(arr)
}
// 列举一个数组
var arr = [10,3,44,38,21,1,4]
// 使用函数
insertSort(arr)