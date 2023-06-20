function chimera_box(center, length) {
console.log(`shape rectangle width ${length} height ${length} center ${center[0]+length/2},${center[1]+length/2},${center[2]};
shape rectangle width ${length} height ${length} center ${center[0]+length/2},${center[1]+length/2},${center[2]+length};
shape rectangle width ${length} height ${length} center ${center[0]},${center[1]+length/2},${center[2]+length/2} rotation 0,1,0,90;
shape rectangle width ${length} height ${length} center ${center[0]+length},${center[1]+length/2},${center[2]+length/2} rotation 0,1,0,90;
shape rectangle width ${length} height ${length} center ${center[0]+length/2},${center[1]},${center[2]+length/2} rotation 1,0,0,90;
shape rectangle width ${length} height ${length} center ${center[0]+length/2},${center[1]+length},${center[2]+length/2} rotation 1,0,0,90;`);
}
