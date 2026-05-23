export function validateUser(user) {
  const errors = {};

  if (!user.name?.trim()) {
    errors.name = "Name is required";
  } else if (user.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!user.email?.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!user.phone?.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^\d{7,15}$/.test(user.phone.trim())) {
    errors.phone = "Enter 7 to 15 digits";
  }

  if (!user.dob?.trim()) {
    errors.dob = "Date of birth is required";
  }

  if (!user.address?.trim()) {
    errors.address = "Address is required";
  }

  if (!user.skills?.trim()) {
    errors.skills = "Skills are required";
  }

  if (user.bio?.trim().length > 500) {
    errors.bio = "Bio must be 500 characters or less";
  }

  if (user.image?.trim() && !/^https?:\/\/.+/i.test(user.image.trim())) {
    errors.image = "Image must be a valid URL (http:// or https://)";
  }

  return errors;
}
