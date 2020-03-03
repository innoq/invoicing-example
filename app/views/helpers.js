/* global rails */

/* Helper to get the name of a model
 * similar to the Rails helper:
 * Invoice.model_name.human(count: 2)
 */
export function human_model_name(klass, { count = 1 } = {}) {
  let human_count = count === 1 ? "one" : "other";

  return rails.t(`activerecord.models.${klass}.${human_count}`);
}

/* Helper to get the name of an attribute
 * similar to the Rails helper:
 * Invoice.human_attribute_name("saleorder_number")
 */
export function human_attribute_name(klass, attribute) {
  return rails.t(`activerecord.attributes.${klass}.${attribute}`);
}

/* Helper to show the value of an enum
 */
export function human_enum_name(klass, attribute, value) {
  return rails.t(`enumeration.${klass}.${attribute}.${value}`);
}
