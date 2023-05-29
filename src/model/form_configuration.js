export const form_configuration = {
     step_one: [
      {
        type: "text",
        name: "jobTitle",
        label: "Job title",
        placeholder: "Enter job title",
        required: true,
        asterisk_style : "text-red-500",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-2",
      },
      {
        type: "text",
        name: "companyName",
        label: "Company name",
        required: true,
        asterisk_style : "text-red-500",
        placeholder: "Enter company name",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-2",
      },
      {
        type: "text",
        name: "industry",
        label: "Industry",
        required: true,
        asterisk_style : "text-red-500",
        placeholder: "Enter industry",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-2",
      },
      {
        type: "text",
        name: "location",
        label: "Location",
        placeholder: "Enter location",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-1"
      },
      {
        type: "text",
        name: "remoteType",
        label: "Remote type",
        placeholder: "Enter remote type",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-1"
      },
    ],
    step_two: [
      {
        type: "text",
        name: "experienceMin",
        label: "Experience",
        placeholder: "Enter minimum experience",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-1"
      },
      {
        type: "text",
        name: "experienceMax",
        label: "",
        placeholder: "Enter maximum experience",
        label_classes: "block mb-6 font-medium",
        field_group_classes: "col-span-1"
      },
      {
        type: "text",
        name: "salaryMin",
        label: "Salary",
        placeholder: "Enter minimum salary",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-1"
      },
      {
        type: "text",
        name: "salaryMax",
        label: "",
        placeholder: "Enter maximum salary",
        label_classes: "block mb-6 font-medium",
        field_group_classes: "col-span-1"
      },
      {
        type: "text",
        name: "totalEmployees",
        label: "Total employees",
        placeholder: "Enter total employees",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-2"
      },
      {
        type: "radio",
        name: "applyType",
        label: "Apply type",
        label_classes: "block mb-1 text-sm font-medium",
        field_group_classes: "col-span-2",
        options: [
          { value: "quickApply", label: "Quick apply" },
          { value: "externalApply", label: "External apply" },
        ]
      }
    ]
  }
