int * bubleSort(int array[], int lenght){
    for (int iteration = 0; iteration < lenght; iteration++){
        for (int i = lenght -1; i >iteration; i--){
            if (array[i-1] > array[i]){
                int tmp = array[i-1];
                array[i-1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
}