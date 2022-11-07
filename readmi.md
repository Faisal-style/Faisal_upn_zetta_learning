1. -Kasus yang pertama adalah memberi label kepada user apakah online atau offline
   -Kasus yang kedua adalah ketika kita ingin membuat total item pada sebuah pada sebuah website, ketika tidak ada pilihan item maka akan muncul item tidak dipilih
2. ngOninit dipanggil paling pertama ketika komponen dipanggil
3. ngAfterViewInit dipanggil ketika komponen child sudah di inisialisasi dan dicek secara keseluruhan
4. ngOnChanges dipanggil setelah ngOnInit dan kapanpun sebuah komponen input berubah dari komponen parent
5. Mungkin dapat dilakukan dengan cara menginisialisasi ngOnChanges setelah ngOnInit, ketika user melakukan sebuah klik ke list yang berbeda maka akan merubah isi halaman tersebut.
