awk '{print $1,":",$2<50||$3<50||$4<50?"Fail":"Pass"}'
