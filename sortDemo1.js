// 冒泡排序：将数组中的每一个数从前往后依次进行比较，然后根据大小交换位置，每一轮的比较都确定出一个当轮比较的最大值，最终实现数组的大小排序。
// 平均时间复杂度O(n*n)
// 最好情况O(n)
// 最差情况O(n*n)
// 空间复杂度O(1)
// 稳定性：稳定
function bubbleSort(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){ //确定比较的轮数
        for(var j = 0; j < len-i; j++){ //确定每轮比较的次数
            if(arr[j] > arr[j+1]){
                var newVarible = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = newVarible;
            }
        }
        console.log("第"+i+"轮排序"+arr)
    }
    console.log(arr);
}
// 列举一个数组
var arr = [10,3,44,38,21,1,4]
// 使用函数
bubbleSort(arr)