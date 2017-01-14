export const CELL_CLICK = 'CELL_CLICK';
export const CELLS_RESET = 'CELLS_RESET';
export const CELLS_FILL = 'CELLS_FILL';

export function cellClick(id) {
  return {
    type: CELL_CLICK,
    payload: id,
  };
}

export function resetCells() {
  return {
    type: CELLS_RESET,
  };
}
