from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator
from django.core.exceptions import ValidationError
from django.utils import timezone
import uuid

class Camp(models.Model):
    capacity = models.PositiveIntegerField(default=6) # Number of seats in the camp
    reserved_spots = models.PositiveIntegerField(default=0) # Number of reserved seats
    created_at = models.DateTimeField(auto_now_add=True) # Timestamp when the camp was created
    updated_at = models.DateTimeField(auto_now=True) # Timestamp when the camp was last updated

class Registration(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) # Connects the signed in user with the registration.
    booking_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) # Unique ID for each booking
    full_name = models.CharField(max_length=100) # Full name of the participant
    phone_number = models.CharField(max_length=15) # Phone number of the participant
    email = models.EmailField(unique=True) # Email address of the participant
    competition_level = models.CharField(max_length=50) # Competition level of the team
    agreement_accepted = models.BooleanField(default=False) # Indicates whether the agreement has been read and accepted
    deposit_paid = models.BooleanField(default=False) # Indicates whether the deposit has been paid
    full_payment_paid = models.BooleanField(default=False) # Indicates whether the full payment has been paid
    is_reserved = models.BooleanField(default=False) # Indicates whether the registration is a reserved spot
    created_at = models.DateTimeField(auto_now_add=True) # Timestamp when the registration was created
    updated_at = models.DateTimeField(auto_now=True) # Timestamp when the registration was last updated

    camp = models.ForeignKey(Camp, related_name='registrations', on_delete=models.CASCADE) # Relation to the camp where the registration belongs

    def clean(self):
        # Check if there are enough spots left in the camp
        if not self.is_reserved:
            remaining_spots = self.camp.capacity - self.camp.registrations.count()
            if remaining_spots <= 0:
                raise ValidationError("No spots left in the camp")
            elif remaining_spots <= self.camp.reserved_spots:
                self.is_reserved = True

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.full_name
