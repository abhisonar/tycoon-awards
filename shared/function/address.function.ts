import { IEventAddress } from "@shared/data/event.data";
import { contactString } from "@shared/function/utility.function";

export function getAddress(address: IEventAddress) {
  return contactString(
    ", ",
    address?.address1 as string,
    address?.landmark as string,
    address?.city as string
  );
}
