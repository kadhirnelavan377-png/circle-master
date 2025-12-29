
export enum LessonType {
  BASICS = 'Basics & Terminology',
  RADIUS_DIAMETER = 'Radius vs Diameter',
  CIRCUMFERENCE = 'The Magic of Pi (Circumference)',
  AREA = 'Calculating Surface Area',
  SECTORS = 'Arcs & Sectors (Pizza Slices)',
  CHORDS_TANGENTS = 'Chords & Tangent Lines'
}

export interface Point {
  x: number;
  y: number;
}

export interface CircleState {
  center: Point;
  radius: number;
}

// Added TriangleState to fix import error in TriangleSandbox.tsx where it was missing from the exported types
export interface TriangleState {
  a: Point;
  b: Point;
  c: Point;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
