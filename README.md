# Sandpile
A visualization project for rotor routing with sandpile dynamics.

NOTE: The Florescu branch is devoted to rewriting main.js to correspond with the standard in "Escape Rates for rotor walks in Z^d" by Laura Florescu, et al. Currently, main.js fires new particles every ten iterations. With the new version, a new particle will be fired either when (a) the last particle returns to the origin or (b) the last particle exits the bounds of the matrix. For now, this branch will remain SEPARATE from master because it is considerably slower than master. See pg. 2 of "Escape Rates..." for more information. 
