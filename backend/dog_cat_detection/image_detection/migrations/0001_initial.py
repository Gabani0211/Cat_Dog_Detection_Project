# Generated by Django 4.2.2 on 2023-07-03 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ImageHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_type', models.CharField(choices=[('CAT', 'cat'), ('DOG', 'dog')], max_length=20)),
                ('image', models.ImageField(upload_to='dog_or_cat_images')),
                ('accuracy', models.FloatField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]