// Example code that can exist in custom resolver

import { StudyRepository } from "./StudyRepository";

(async () => {
  const studyRepository = new StudyRepository();

  try {
    console.log("\n");

    const studyWithoutPatient = await studyRepository.findOne(
      "8cb74e40-8dc6-43c2-b848-b6985ba6f9ae"
    );

    console.log("a study without a patient: ", studyWithoutPatient);

    console.log("\n");
    console.log("\n");

    const study = await studyRepository.findOne(
      "2839c58c-ae8f-493b-8a13-34abc331fbca"
    );

    console.log("\n");
    console.log("=== Study domain ===");
    console.log("\n");
    console.log("study: ", study);
    console.log("studyId: ", study.id);
    console.log("studyName: ", study.name);
    console.log("a study's patient: ", study.patient);


    console.log("a study's device: ", study.device);
  } catch (e) {
    console.error(e);
  }
})();
