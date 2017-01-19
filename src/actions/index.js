export const CELL_CLICK = 'CELL_CLICK';
export const CELLS_RESET = 'CELLS_RESET';
export const CELLS_FILL = 'CELLS_FILL';

export function cellClick(date) {
  return {
    type: CELL_CLICK,
    payload: date,
  };
}

export function resetCells() {
  return {
    type: CELLS_RESET,
  };
}
