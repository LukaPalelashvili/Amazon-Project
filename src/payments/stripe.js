import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51O77ohDUwjB2UF2RYstDmeOFQuM4hrmWceEerhjtO0e2Sxfocnw6QmVPsJNPUwk9WNy1zyZZTqm5sgK156KTmy2100Qoj3bziR",
);

export default stripePromise;
