/**
 * Make some property optional an type
 *
 * Partial -> Constructs a type with all properties of Type set to optional.
 * This utility will return a type that represents all subsets of a given type.
 *
 * Pick -> Constructs a type by picking the set of properties Keys
 * (string literal or union of string literals) from Type.
 *
 * Omit -> Constructs a type by picking all properties from Type and then
 * removing Keys (string literal or union of string literals). The opposite of Pick.
 *
 * @example
 * ```typescript
 * type Post {
 * 	id: string;
 * 	name: string;
 *	email: string;
 * }
 *
 * Optional<Post, 'id' | 'email'>
 * ```
 *
 *
 *
 */

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
