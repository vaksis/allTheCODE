using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AttackPlayer : MonoBehaviour
{
    public float timeBetweenAttacks = 0.5f;
    public int attackDamage = 10;

    GameObject player;
    HealthBar HealthBar;

    float timer;

    private void Awake()
    {
        player = GameObject.FindGameObjectWithTag("player");
        HealthBar = player.GetComponent<HealthBar>();
    }

    private void OnTriggerEnter2D(Collider2D col)
    {
        if (col.gameObject == player)
        {
            Attack();
        }
    }

    private void Update()
    {
        timer += Time.deltaTime;

        if (HealthBar.currentHealth <= 0)
        {
            Destroy(player);
            Destroy(this);
            Destroy(GetComponent<Rigidbody>());
        }
    }

    void Attack()
    {
        timer = 0f;
        if (HealthBar.currentHealth > 0)
        {
            HealthBar.TakeDamage(attackDamage);
        }
    }
}
