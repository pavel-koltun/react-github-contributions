export const CELL_CLICK = 'CELL_CLICK';
export const CELLS_RESET = 'CELLS_RESET';

export const GENERATE_SCRIPT = 'GENERATE_SCRIPT';

export const DATE_FORMAT = 'YYYY-MM-DD';

export function cellClick(date) {
  return {
    type: CELL_CLICK,
    payload: date.format(DATE_FORMAT),
  };
}

export function resetCells() {
  return {
    type: CELLS_RESET,
  };
}

export function generateScript(contributions) {
  return {
    type: GENERATE_SCRIPT,
    payload: contributions,
  };
}
