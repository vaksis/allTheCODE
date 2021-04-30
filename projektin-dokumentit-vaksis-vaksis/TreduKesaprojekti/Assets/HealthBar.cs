using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class HealthBar : MonoBehaviour
{

    public Slider slider;
    public int currentHealth;
    public float flashSpeed = 5;
    public Slider healthSlider;
    public Color flashColour = new Color(1, 0, 0, 0.1f);
    bool isDead;
    bool damaged;

    public void SetMaxHealth(int health)
    {
        slider.maxValue = health;
        slider.value = health;
    }

    public void SetHealth(int health)
    {
        slider.value = health;
    }

    private void Awake()
    {
        currentHealth = 100;
    }

    private void Update()
    {
        damaged = false;
    }

    public void TakeDamage(int amount)
    {
        damaged = true;
        currentHealth -= amount;
        healthSlider.value = currentHealth;
    }
}
